package io.github.kmikuta.infrastructure

import io.github.kmikuta.domain.Application
import io.github.kmikuta.domain.ApplicationRepository
import io.github.kmikuta.domain.ApplicationType
import jakarta.inject.Singleton
import reactor.core.publisher.Flux

@Singleton
class InMemoryApplicationRepository : ApplicationRepository {
    private val applications = listOf(
        Application("Vanilla app", "http://localhost:3000/vanilla-app.bundle.js", ApplicationType.SELF_RENDERING),
        Application("React FM", "http://localhost:3000/remoteEntry.js", ApplicationType.FEDERATED_MODULE),
    )

    override fun getApplications(): Flux<Application> = Flux.fromIterable(applications)
}