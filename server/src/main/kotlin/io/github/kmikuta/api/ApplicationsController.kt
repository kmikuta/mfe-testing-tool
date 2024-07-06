package io.github.kmikuta.api

import io.github.kmikuta.domain.Application
import io.github.kmikuta.domain.ApplicationRepository
import io.micronaut.http.HttpResponse
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.serde.annotation.Serdeable
import reactor.core.publisher.Mono

@Controller("/api/applications")
class ApplicationsController(private val repository: ApplicationRepository) {

    @Get(produces = ["application/json"])
    fun getApplications(): Mono<HttpResponse<ApplicationListDto>> = repository
        .getApplications()
        .map { it.toDto() }
        .collectList()
        .map { ApplicationListDto(it, it.size)}
        .map { HttpResponse.ok(it) }
}

@Serdeable
data class ApplicationDto(
    val name: String,
    val url: String,
    val type: String
)

@Serdeable
data class ApplicationListDto(
    val items: List<ApplicationDto>,
    val count: Number
)

fun Application.toDto() = ApplicationDto(name, url, type.name)