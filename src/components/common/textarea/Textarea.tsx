import './textarea.scss';

function Textarea() {
    return (
        <div className='textarea'>
            <textarea name='obs' id=''
                placeholder='alguma observação do item? • opcional&#10;ex: tirar algum ingrediente, ponto do prato'>
            </textarea>
        </div>
    );
}

export default Textarea;