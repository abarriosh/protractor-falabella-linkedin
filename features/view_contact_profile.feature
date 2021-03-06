Feature: Search a Linkedin Contact and verify the profile page,
			As a Linkedin's user
			I should be able to search a contact from my network
			In order to display the contact's profile

Scenario Outline: Check The Contact's Profile
	Given A user login into the Linkedin Network with a "<user_email>" and "<user_password>"
	When The user enters a "<contact_name>" into the search field and submits the request
	And The user clicks over the link referent to the contact name and waits the profile for "<url_pattern>"
	Then Ensure the profile "<contact_name>" is displayed

	Examples:
		|user_email| user_password | contact_name |url_pattern |
		|foo@domain.com | 123456 | Ronye M. Vernaes K. | ronyevernaes |
		|foo1@domain.com | 123456 | Name Lastname | profilepattern |
