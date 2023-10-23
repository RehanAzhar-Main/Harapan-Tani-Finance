
import { Button } from 'flowbite-react';

export default function OutlineButtonGroup(props) {
  return (
    <>
      <Button.Group outline>
        {props.datas.map((data) => {
          return (
            <Button className='h-12' type='file' gradientDuoTone="cyanToBlue">
              <p>
                {data.name}
              </p>
            </Button>
          )
        })}
      </Button.Group>
    </>
  )
}