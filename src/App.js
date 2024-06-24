import React, { useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';
import './App.css'; 

const TodoList = () => {
    
    const [userInput, setUserInput] = useState("");
    const [list, setList] = useState([]);

    const updateInput = (value) => {
        setUserInput(value);
    };

    const addItem = () => {
        if (userInput !== "") {
            const newUserInput = {
                id: Math.random(),
                value: userInput,
            };

            setList([...list, newUserInput]);
            setUserInput("");
        }
    };

    const deleteItem = (key) => {
        const updatedList = list.filter((item) => item.id !== key);
        setList(updatedList);
    };

    const editItem = (index) => {
        const editedTodo = prompt('Edit the todo:');
        if (editedTodo !== null && editedTodo.trim() !== '') {
            const updatedTodos = [...list];
            updatedTodos[index].value = editedTodo;
            setList(updatedTodos);
        }
    };

    return (
        <Container>
            <Row
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "3rem",
                    fontWeight: "bolder",
                }}
            >
                TODO LIST
            </Row>

            <hr />
            <Row>
                <Col md={{ span: 5, offset: 4 }}>
                    <InputGroup className="mb-3 input-group">
                        <FormControl
                            placeholder="add item . . ."
                            size="lg"
                            value={userInput}
                            onChange={(item) => updateInput(item.target.value)}
                            aria-label="add something"
                            aria-describedby="basic-addon2"
                        />
                        <Button
                            variant="dark"
                            className="mt-2"
                            onClick={addItem}
                        >
                            ADD
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row className="list-group-container">
                <Col md={{ span: 5 }}>
                    <ListGroup>
                        {list.map((item, index) => (
                            <div key={index}>
                                <ListGroup.Item
                                    variant="dark"
                                    action
                                    className="list-group-item"
                                >
                                    <span>{item.value}</span>
                                    <span>
                                        <Button
                                            className="btn btn-delete"
                                            onClick={() => deleteItem(item.id)}
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            className="btn btn-edit"
                                            onClick={() => editItem(index)}
                                        >
                                            Edit
                                        </Button>
                                    </span>
                                </ListGroup.Item>
                            </div>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default TodoList;
