package io.github.kmikuta.domain

import reactor.core.publisher.Flux

interface ApplicationRepository {
    fun getApplications(): Flux<Application>
}