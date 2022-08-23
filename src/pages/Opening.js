import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

function Opening() {
  const navigate = useNavigate();
  return (
    <div className="cardOpening">
      <Card style={{ width: "18rem" }} className="text-center">
        <Card.Body>
          <img src={Logo} width={150} height={110} />
          <Card.Text className="mt-2">
            You can search repository in here
          </Card.Text>
          <Button variant="dark" onClick={() => navigate("/home")}>
            Go To List Repo
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Opening;
