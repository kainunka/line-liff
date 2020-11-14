import React from 'react'
import { Button, Header, Modal, Icon } from 'semantic-ui-react'

const ModalTerm = ({ termRender, onCheckTerm }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      closeIcon
      open={ onCheckTerm ? open : false }
      trigger={termRender}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header content='ข้อตกลงและเงื่อนไข' />
      <Modal.Content>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalTerm