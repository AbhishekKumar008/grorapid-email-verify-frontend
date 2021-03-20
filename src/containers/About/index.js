import React,{useState, useRef} from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import AddFileImage from '../../utils/images/add_file.png';
import GroupImage from '../../utils/images/Group.png';
import ResponseTab from '../../components/ResponseTab/ResponseTab';
import '../../styles/about.scss';

const About = () => {
  const [active, setActive] = useState(false);
  const [loading, setloading] = useState(false);
  const [fileInput, setfileInput] = useState({});
  const [textChange, settextChange] = useState();
  const [responseStatus, setResponseStatus] = useState(null);
  const inputRef = useRef(0);
  const onHnadleFileChnage = (e) => {
    setfileInput({'file':e.target.files[0]})
  }
  const handleOpenFileinput=()=>{
    inputRef.current.click();
  }
  const handleDragOver=(e)=>{
    console.log(e.dataTransfer.files)
  }
  const onDropFile=(e)=>{
    e.preventDefault();
    console.log(e.dataTransfer.files)
  }
  const handleChangeEmails = (e) => {
    settextChange(e.target.value)
  }
  
  const handleCheckEmail = () => {
    console.log(textChange.split(/\n/))
  }
  const handleSubmitFile = () => {
    const formData = new FormData();
    fileInput.file && formData.append('file',fileInput && fileInput.file);
  }
  
  return (
    <div className='gr-email-verify-body container'>
      <div className='gr-email-verify-about'>
        <h3>
          Free Email List Cleaner
        </h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </p>
      </div>
      <div className='gr-email-verify-options'>
        <Button onClick={()=>{setActive(false)}} className={!active ? 'active' : ''}>Verify Emails</Button><Button onClick={()=>setActive(true)} className={active?'active':''}>Bulk Upload</Button>
      </div>
      {
        fileInput && fileInput.file &&
        <div className='filename-instance'>
        <div className='file-image'>
          <img src={GroupImage} alt='group-image'/>
          <span><strong>{fileInput && fileInput.file && fileInput.file.name}</strong></span>
        </div>
        <Button onClick={handleSubmitFile}>Check Now</Button>
      </div>
      }
      {
        responseStatus &&
        <ResponseTab
          totalEmails='10'
          validEmails='2'
          invalidEmails='1'
          spamEmails='3'
          acceptableEmails='4'
          disposable='5'
          unknown='6'
          duplicate='6'
        />  
      }
      <div>
        {
          active ?
          <div className='input-drop-file' onDrop={onDropFile} onDragEnter={handleDragOver}>
            <input type='file' onChange={(e)=>{onHnadleFileChnage(e)}} ref={inputRef} style={{display:'none'}} accept='.csv,.xlsx'/>
            <img src={AddFileImage} alt='Add file'/><br/>
            <strong>Drag & drop file here</strong><br/>
            <p>Choose a .txt or .csv file with email list</p>
            <Button onClick={handleOpenFileinput}>Brows Files</Button>
          </div>
          :
        <Form className='single-email-form'>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder='Emails, one per line' onChange={handleChangeEmails} value={textChange} disabled={loading}/>
          </Form.Group>
          <Button className='submit-button' onClick={handleCheckEmail}>Clean List</Button>
        </Form>
        }
      </div>
      {
        loading &&
        <div className='spinner'>
          <Spinner animation="border" role="status">
            <span className="sr-only">Cleaning</span>
          </Spinner>
        </div>
      }
    </div>
  )
}

export default About
