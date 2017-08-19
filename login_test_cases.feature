Feature: Generic Login Functionality,
				 Let's assume the username is an email

Scenario Outline: Invalid Conditions
	Given The user is on Login Landing Page
	When The user enters an invalid "<email_id> and "<user_password>"
	And The user submits request for Login
	Then Ensure that a transation failure message is displayed

	Examples:
		|email_id     | user_password |
		|foo@         | ******        |
		|foo@domain   | ******        |
		|foo@domain.  | ******        |
		|foo@.com     | ******        |
		|foo@.        | ******        |
		|@domain.com  | ******        |
		|foo@         | ******        |
		|@            | ******        |

 Scenario Outline: Empty Fields
	 Given The user is on Login Landing Page
	 When The user enters an empty string into the "<email_id>" or "<user_password>" fields
	 And The user submits request for Login
	 Then Ensure that a transation failure message is displayed

		Examples:
		|email_id         | user_password |
		|                 | ******        |
		|foo@domain.com   |               |
		|                 |               |

Scenario Outline: Unregistered User
	Given the user is on Login Landing Page
	When The user enters an unregistered "<email_id>" with a "<user_password>"
	And The user submits request for Login
	Then Ensure that an Unregistered User message is displayed

		Examples:
		|email_id                 | user_password |
		|unregistered@domain.com  | ******        |

Scenario Outline: Unauthorized User
	 Given The user is on Login Landing Page
	 When The user enters an unauthorized "<email_id>" with the "<user_password>"
	 And The user submits request for Login
	 Then Ensure that an Unauthorized message is displayed

		Examples:
		|email_id                | user_password |
		|unauthorized@domain.com | ******        |

Scenario Outline: Wrong Credentials
 	 Given The user is on Login Landing Page
	 When The user enters "<email_id>" and the "<user_password>" with wrong credentials
	 And he submits request for Login
	 Then ensure that a transation failure message is displayed

		Examples:
		|email_id       | user_password |
		|foo@domain.com | wrong_password|

Scenario Outline: Succesfully Login
	 Given The user is on Login Landing Page
	 When The user enters valid "<email_id>" with a valid "<user_password>"
	 And The user submits request for Login
	 Then ensure the login was made succesfully

		Examples:
		|email_id       | user_password |
		|foo@domain.com | rigth_password|
