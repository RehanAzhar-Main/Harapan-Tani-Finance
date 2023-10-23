'use client';

import {  Label, Modal, TextInput, Button } from 'flowbite-react';

interface PopUpModalProps {
  openModal: string | undefined;
  setOpenModal:React.Dispatch<React.SetStateAction<string | undefined>>;
  // email: string;
  // setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export default function EditPopupModals(props: PopUpModalProps) {
  // const [openModal, setOpenModal] = useState<string | undefined>();
  // const [email, setEmail] = useState("");
  // const props = { openModal, setOpenModal, email, setEmail };
  const headers = [
    {name:'production_id', type: 'text', value: 'BRSU-001'},
    {name:'production_date', type: 'text', value: '2023-10-01T16:54:40.000'},
    {name:'category', type: 'text', value: 'sedang'},
    {name:'total', type: 'text',value: '150'},
    {name:'available', type: 'text', value: '90'},
    {name:'warehouse', type: 'text', value:'pusat'},
  ]

  return (
    <>
      <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Data</h3>
            {headers.map((header,i) => {
              return (
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor={header.name} value={header.name} />
                  </div>
                  <TextInput id={header.name} value={header.value} required />
                </div>
              )
            })}
          </div>
          <div className='flex flex-row-reverse gap-4 my-6'>
          <Button gradientMonochrome="success" onClick={() => props.setOpenModal(undefined)}>
            Confirm
          </Button>
          <Button gradientMonochrome="failure" onClick={() => props.setOpenModal(undefined)}>
            Cancel
          </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}


