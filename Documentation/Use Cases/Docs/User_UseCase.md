# MoneyContour App User Profile UseCase Scenarios

## User Create Profile
1. User opens App
2. System Loads/displays Login Page
3. User Clicks SignUp button
4. System Redirects to SignUp Page
5. System displays SignUp Form
6. User completes SignUp Form
7. User clicks submit button
8. System validates information
9. System encryptes password
10. System stores information in database

### User Create Profile Errors
8. If User information is not valid
	a. System Redirects back to SignUp Page
	b. Systems highlights invalid information
	c. User corrects information
10. If database storage fails
	a. System returns error message to User
	b. System Redirects to SignUp Page
	
## User Login
1. User opens App
2. System Loads Login Page
3. System Displays Login Form
4. User enters credentials
5. User clicks Login button
6. System validates User credentials
7. System Varifies User
8. System redirects to Home Page

### User Login Errors
6. If User credentials are invalid
	a. System highlights invalid information
	b. System allows User to re-enter credentials
7. If User cannot be varified/does not exit
	a. System return error message
	b. System allows User to re-enter credentials
	