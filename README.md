
# React/TypeScript/Tailwind Application

This is a web application built with React, TypeScript, and Tailwind CSS. This README provides information about how to set up the project, run it, and test it.

## Installation

1. Clone this repository to your local machine:

```
git clone https://github.com/mojeimi/basic-patient-dashboard.git
```
   
2. Navigate to the project directory:

```
cd basic-patient-dashboard
```

3. Install the project dependencies:

```
npm install
```

## Usage

To start the application, run:

```
npm start
```

The application will start and can be accessed at [http://localhost:3000](http://localhost:3000).

## Testing

To run the unit tests, use:

```
npm test
```

## Notes

1. You can change the My Json Server API URL by modifying the value in the index.ts file located at /src/config.

2. Some browsers do not allow making HTTP requests from localhost due to CORS restrictions. If you encounter this issue, you can download the Allow CORS extension to whitelist localhost:3000.
