'use client';

import { Table } from 'flowbite-react';
import ProductRow from './ProductRow';

export default function HoverTable(props) {
  // console.log(props.product)
  const headers = ['Kode Produksi', 'Tanggal Produksi', 'Kategori', 'Total Stok', 'Tersedia','Gudang']
  // console.log('headers',headers)
  return (
    <Table hoverable>
      <Table.Head>
        {headers.map((header) => {
          return(
            <Table.HeadCell>
              {header}
            </Table.HeadCell>
          )
        })}
        <Table.HeadCell>
          <span className="sr-only">
            Edit
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
      {props.data.map((p) => {
          return (
            <ProductRow
            productionCode= {p.production_id}
            productionDate={p.production_date} 
            category={p.category}
            totalStock={p.total}
            available={p.available}
            warehouse={p.warehouse}
            />
          )
        })}
        {/* <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <p>
              Microsoft Surface Pro
            </p>
          </Table.Cell>
          <Table.Cell>
            White
          </Table.Cell>
          <Table.Cell>
            Laptop PC
          </Table.Cell>
          <Table.Cell>
            $1999
          </Table.Cell>
          <Table.Cell>
            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            >
              <p>
                Edit
              </p>
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Magic Mouse 2
          </Table.Cell>
          <Table.Cell>
            Black
          </Table.Cell>
          <Table.Cell>
            Accessories
          </Table.Cell>
          <Table.Cell>
            $99
          </Table.Cell>
          <Table.Cell>
            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            >
              <p>
                Edit
              </p>
            </a>
          </Table.Cell>
        </Table.Row> */}
      </Table.Body>
    </Table>
  )
}


