# Contoh Gherkin
Feature: Hello Endpoint

  Scenario: Successfully accessing /hello endpoint
    Given the Spring Boot app is running
    When I send a GET request to "/hello"
    Then the response status should be 200 OK
    And the response body should be "hello world"

  Scenario:  unsuccessfully accessing /hello endpoint
    Given the Spring Boot app is running
    When I send a GET request to "/hello"
    Then the response status should be 404 Not Found
    And the response not be exist 
