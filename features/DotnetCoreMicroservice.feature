Feature: dotnet core microservice

  Scenario Outline:
    Given a "<verbs>"
    And "<host>"
    And a "<AppKey>"
    And a "<Content-Type>"
    And a "<Accept>"
    And a "<port>"
    And a "<path>"
  Examples:
  |verbs  |AppKey            |Content-Type     |Accept             | host       | port   | path       |
  |GET    |"EDF API Testing"   |"application/json" |"application/json"   | "Reference"  |8080    | "species"    |