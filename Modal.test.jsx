import { render, fireEvent } from '@testing-library/react';
import Modal from './src/reusable/Modal';

//Testar ifall Modal renderar korrekt när isOpen propen är true.
describe ('Modal', () => {
    //Testar ifall Modal renderar korrekt när isOpen propen är true.
    it('renders Modal correctly when isOpen prop is true', () => {
        let closeClicked= false;
        const handleClose= () => {
            closeClicked = true;
        }; const {getByText}= render(
            <Modal isOpen={true} onClose={handleClose}>
              <div>Modal Content</div>
            </Modal>
        );

        const modalContent = getByText('Modal Content');
        expect(modalContent).not.toBeNull();

        const closeButton = getByText('Close');
        expect(closeButton).not.toBeNull();

        fireEvent.click(closeButton);
        expect(closeClicked).toBe(true);

    });

   //Testar om Modal inte renderar när isOpen proppen är false.
it('does not render Modal when isOpen is false', () => {
    const handleClose= () => {};
    const {queryByText} = render( 
        <Modal isOpen={false} onClose={handleClose}>
            <div>Modal Content</div>
        </Modal>
    );

    const modalContent = queryByText('Modal Content');
    expect(modalContent).toBeNull();

    const closeButton = queryByText('Close');
    expect(closeButton).toBeNull(); 
});
});



