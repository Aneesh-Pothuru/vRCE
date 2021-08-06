# vRealize Cloud Efficiency

VMware Intern Borathon 2021 -- Made with [React.js](https://reactjs.org/) and [Python Flask](https://flask.palletsprojects.com/en/1.1.x/)

vRCE is an application that allows clients to automate efficient cloud deployments by tracking application usage to make appropriate deployments.

Our mission is to help reduce the energy consumption and save costs to our clients by automating private and public cloud deployments.
## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install the dependencies for the backend.

```bash
pip install -r requirements.txt
```

Use the package manager [npm](https://nodejs.org/en/) to install the dependencies for the frontend.

```bash
npm install
```

## Usage

After installing all the dependencies into the virtual environment, activate it.

```bash
source project/bin/activate
```

After activating the virtual environment, get to the backend directory to run the application.

```bash
flask run
```

To start the backend run the app.py file.

```bash
python app.py
```

To run the frontend of the application start the npm script.

```bash
npm run start
```

# Frontend

## Framework

This application's frontend was written using JavaScript and the [React Framework](https://reactjs.org/).

These files can be located in the `src` directory.

Other directories such as:

```bash
src/api
src/components
src/views
```

Will also mainly include files written in this framework.

## Testing

To run the unit tests in the application, run the test npm script.

```bash
npm run test
```

To write unit tests in the application, write a simple description and then the function.

```javascript
it("renders the foo component", () => {
  render(<Foo />);
});
```

## Styles

This application uses [styled-components](https://styled-components.com/) to integrate styles in the application.

To create a styled-component file for a specific component, write the name of the component with .styles at the end.

```bash
foo.styles.js
```

To write styles for a HTML tag, import the library and give a descriptive name.

```javascript
import styled from "styled-components";

export const BarContainer = styled.div`
  color: black;
  overflow: scroll;
`;
```

To write styles on existing components, import the library and mention the component in the name.

```javascript
import styled from "styled-components";
import Foo from "./foo";

export const FooStyledHomePage = styled(Foo)`
  color: black;
  overflow: scroll;
`;
```

To write normal css to integrate with the styled-components import css from [styled-components](https://styled-components.com/).

```javascript
import { css } from "styled-components";

const disabled = css`
  cursor: not-allowed;
  color: gray;
`;
```

## State Management

This application uses [Redux](https://react-redux.js.org/introduction/quick-start) to manage state throughout the application.

All files related to the redux store will be located in the `src/redux` directory.

When creating a new reducer make sure to initialize state and give detailed types.

```javascript
INITIAL_STATE = {
  foo: "",
  bar: ""
}

export const foobarReducer = (state = "INITIAL_STATE", action){
  switch(action.type){
    case('SET_FOO'){
      return{
        ...state,
        foo: action.payload
      };
    }case('SET_BAR'){
      return{
        ...state,
        bar: action.payload
      };
    }default{
      return state;
    }
  }
}
```

When creating a new action for the reducer make sure to add both type and payload.

```javascript
export const setFoo = (foo) => {
  type: 'SET_FOO',
  payload: foo
};

export const setBar = (bar) => {
  type: 'SET_BAR',
  payload: bar
};
```

When trying to either change state or access state we use the [useSelector and useDispatch](https://react-redux.js.org/api/hooks) hooks from [react-redux](https://react-redux.js.org/)

```javascript
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFoo, setBar } from "./foobar.actions.js";

export const FooBar = () => {
  const { foo, bar } = useSelector((state) => state.foobarReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFoo(foo))}>{foo}</button>
      <button onClick={() => dispatch(setBar(bar))}>{bar}</button>
    </div>
  );
};
```

## API Calls

This application uses [axios](https://www.npmjs.com/package/axios) to fetch data.

All the API requests will be inside the `src/api` directory.

To use the request use the websitePrefix from the api-info.js file.

```javascript
import { websitePrefix } from "../api-info";

export const foobarApi = (foo, bar) => {
  return axios({
    url: websitePrefix + "/api/" + foo + bar,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
  });
};
```

# Backend

This application's backend was written using Python.

## Generating Consumer Data

The file consumer_data_generator.py creates a file loaded with sample consumer data with information consisting of Name, User ID, Cloud Type, CPU Usage and Memory Usage.

```python
with open('consumer_data.csv', 'w', newline='') as file:
	writer = csv.writer(file)
	# i represents value for each User ID
	for i in range(1,10+1): #creates 10 User IDs
		# j represents value for number of deployments under User ID
		for j in range(1,10+1): #creates 10 deployments for each User ID
			cpu_usage = random.randint(0,100)
			memory_usage = random.randint(0,100)
			cloud_identifier = random.randint(1,2) #randomly determine the cloud type of deployment

			if cloud_identifier == 1: # Let 1 symbolize public cloud
				writer.writerow(["Name:"+str(i)+"-"+str(j), i, "Public", cpu_usage, memory_usage])
			else: #case: cloud_identifier == 2, Let 2 symbolize private cloud
				writer.writerow(["Name:"+str(i)+"-"+str(j), i, "Private", cpu_usage, memory_usage])
```

## Reading Consumer Data

Data from the inputted file containing consumer data is read and stored.

```python
with open('consumer_data.csv', 'r') as file:
	reader = csv.reader(file)
	#note data convention: Name, User ID, Cloud Type, CPU usage, Memory Usage
	for line in reader:
		#add each line data to its related array
		name_list.append(line[0])
		user_id_list.append(line[1])
		cloud_type_list.append(line[2])
		cpu_usage_list.append(line[3])
		memory_usage_list.append(line[4])
```

## Analyzing Consumer Data

Total usage for every deployment is found and analyzed to check whether the transition between public and private cloud should be made.

```python
total_usage = int(cpu_usage_list[counter]) + int(memory_usage_list[counter])
```

```python
if total_usage <= 100:
			#check cloud type is set to Public
			if cloud_type_list[counter] == "Public":
				#keep original data as is
				writer.writerow([name_list[counter], user_id_list[counter], cloud_type_list[counter], cpu_usage_list[counter], memory_usage_list[counter]])
				print(name_list[counter] + " - Kept in Public Cloud")
			else: #case: cloud type listed as private, so transition to public cloud
				#update cloud type
				writer.writerow([name_list[counter], user_id_list[counter], "Public", cpu_usage_list[counter], memory_usage_list[counter]])
				print(name_list[counter] + " - Moved to Public Cloud")
		else: #case: total_usage > 100:
			#check cloud type is set to Private
			if cloud_type_list[counter] == "Private":
				#keep original data as is
				writer.writerow([name_list[counter], user_id_list[counter], cloud_type_list[counter], cpu_usage_list[counter], memory_usage_list[counter]])
				print(name_list[counter] + " - Kept in Private Cloud")
			else: #case: cloud type listed as public, so transition to private cloud
				#update cloud type
				writer.writerow([name_list[counter], user_id_list[counter], "Private", cpu_usage_list[counter], memory_usage_list[counter]])
				print(name_list[counter] + " - Moved to Private Cloud")
```

Both reading and analyzing the consumer data are done in the cloud_checker.py file.

## Automizing Total Usage - Cloud Type Check

To automize the process of checking if consumer data is in the most cost-effective cloud, use crontab to schedule a cron job.

```vim
0 4 * * 1 /usr/local/bin/python3 /Users/username/Documents/vRCE/vrce/cloud_checker.py
```
