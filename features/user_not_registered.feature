Feature: Logs with a not registered user,
			As a not registered user of Linkedin
			The user should not be able to login into the network
			In order to guarantee that a unauthorized access is rejected.

Scenario Outline: Check The Error Message
	Given A login with a not registered "<user_email>" and "<password>
	Then Ensure an error message is displayed

	Examples:
		|user_email| user_password |
		|foo@domain.com | 123456 |
		|foo1@domain.com | 123456 |
