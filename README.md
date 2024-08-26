# TODO API

This is a simple TODO API built with Express.js. It allows you to create, read, update, and delete TODO items.

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd <project-directory>
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
2. The server will be running on `http://localhost:3000`.

## API Endpoints

### Create a TODO item
- **URL**: `/api/todos`
- **Method**: `POST`
- **Body**:
    ```json
    {
        "title": "string",
        "description": "string"
    }
    ```
- **Response**:
    ```json
    {
        "id": "string",
        "title": "string",
        "description": "string",
        "completed": false
    }
    ```

### Get all TODO items
- **URL**: `/api/todos`
- **Method**: `GET`
- **Response**:
    ```json
    [
        {
            "id": "string",
            "title": "string",
            "description": "string",
            "completed": false
        }
    ]
    ```

### Get a specific TODO item by ID
- **URL**: `/api/todos/:id`
- **Method**: `GET`
- **Response**:
    ```json
    {
        "id": "string",
        "title": "string",
        "description": "string",
        "completed": false
    }
    ```

### Update a TODO item by ID
- **URL**: `/api/todos/:id`
- **Method**: `PUT`
- **Body**:
    ```json
    {
        "title": "string",
        "description": "string",
        "completed": "boolean"
    }
    ```
- **Response**:
    ```json
    {
        "id": "string",
        "title": "string",
        "description": "string",
        "completed": false
    }
    ```

### Delete a TODO item by ID
- **URL**: `/api/todos/:id`
- **Method**: `DELETE`
- **Response**: `204 No Content`

## License

This project is licensed under the MIT License.