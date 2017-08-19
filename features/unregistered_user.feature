Feature: Login with an unregistered user,
			An unregistered Linkedin's user
			should not be able to login into the network
			in order to guarantee unauthorized access to the system.

Scenario Outline: Check the Error Message displayed
	Given A login with an unregistered "<user_email>" and "<user_password>
	Then Ensure an error message is displayed

	Examples:
		|user_email| user_password |
		|foo@domain.com | 123456 |
		|foo1@domain.com | 123456 |
