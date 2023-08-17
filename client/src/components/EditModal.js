import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import {editContact} from "../redux/actions"



const EditModal = ({el}) => {
  const [modal, setModal] = useState(false);
  const[name,setName]=useState(el.name)
  const[email,setEmail]=useState(el.email)
  const[phone,setPhone]=useState(el.phone)
  const toggle = () => {
    setModal(!modal);

  };
  const dispatch = useDispatch();

  const editt=()=>{
    dispatch(editContact(el._id,{name,email,phone}))
    setModal(!modal)
  }
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        edit contact{" "}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>edit modal</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">name</Label>
              <Input
         value={name}
         onChange={(e)=>setName(e.target.value)}
                type="text"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">phone</Label>
              <Input
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
                type="text"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={editt}>
            save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditModal;