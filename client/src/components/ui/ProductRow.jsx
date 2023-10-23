import {useState} from 'react';
import { Table,Button } from 'flowbite-react';
import {GoTrash} from 'react-icons/go'
import {FiEdit3} from 'react-icons/fi'

import { formatDate } from '../../utils/FormatDate';
import { CapitalizeWord } from '../../utils/FormatWord';
import DeletePopUpModal from './DeleteModal';
import EditPopupModals from './EditPopupModal';

export default function ProductRow(props) {

  var date = formatDate(props.productionDate);

  const [editModal, setEditModal] = useState(""); 

  const handleEditPopupModals = () => {
    setEditModal('form-elements');
    console.log('editModal',editModal);
  };


  const [deleteModal, setDeleteModal] = useState("");

  const handleDeleteModals = () => {
    setDeleteModal('pop-up');
    console.log('deleteModal',deleteModal);
  };

  return (
    <>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {props.productionCode}
      </Table.Cell>
      <Table.Cell>
        {date}
      </Table.Cell>
      <Table.Cell>
      {CapitalizeWord(props.category)}
      </Table.Cell>
      <Table.Cell>
        {props.totalStock}
      </Table.Cell>
      <Table.Cell>
        {props.available}
      </Table.Cell>
      <Table.Cell>
        {CapitalizeWord(props.warehouse)}
      </Table.Cell>
      <Table.Cell>
        <Button onClick={handleEditPopupModals} color="warning" className='mb-2'>
          <FiEdit3 className="mr-2 h-5 w-5"/>
          Edit
        </Button>
        <Button onClick={handleDeleteModals} color="failure">
          <GoTrash className="mr-2 h-5 w-5"/>
          Delete
        </Button>
      </Table.Cell>
    </Table.Row>
    
    <div>{<EditPopupModals openModal={editModal} setOpenModal={setEditModal}/>}</div>
    <div>{<DeletePopUpModal openModal={deleteModal} setOpenModal={setDeleteModal}/>}</div>

    </>
    
  )

  

}