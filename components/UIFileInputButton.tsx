import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faImage } from '@fortawesome/free-solid-svg-icons'

export interface IProps {
    acceptedFileTypes?: string;
    allowMultipleFiles?: boolean;
    label: string;
    onChange: (formData: FormData) => void;
    uploadFileName: string;
	type: string;
}
  
export const UiFileInputButton: React.FC<IProps> = (props) => {
    const fileInputRef = React.useRef<HTMLInputElement | null>(null);
    const formRef = React.useRef<HTMLFormElement | null>(null);
  
    const onClickHandler = () => {
		fileInputRef.current?.click();
    };
  
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files?.length) {
			return;
		}
	
		const formData = new FormData();
		
		Array.from(event.target.files).forEach((file) => {
			formData.append(event.target.name, file);
		});
	
		props.onChange(formData);
	
		formRef.current?.reset();
	};
  
    return (
		<form ref={formRef} className="bg-blue-500 hover:bg-blue-600 transition transition-ease transition-500ms rounded-lg">
			<div className="relative text-white">
				<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
					{
						props.type == "image" ?
							<FontAwesomeIcon icon={faImage} className='w-8 h-8 text-white'/>
						: <FontAwesomeIcon icon={faFileAlt} className='w-8 h-8 text-white'/>
					}
				</div>
				<button type="button" className="py-6 px-2 pl-14 font-bold w-full" onClick={onClickHandler}>
					{props.label}
				</button>
			</div>
			<input
				accept={props.acceptedFileTypes}
				multiple={props.allowMultipleFiles}
				name={props.uploadFileName}
				onChange={onChangeHandler}
				ref={fileInputRef}
				style={{ display: 'none' }}
				type="file"
				id="media-uploader"
			/>
		</form>
    );
};
  
UiFileInputButton.defaultProps = {
    acceptedFileTypes: '',
    allowMultipleFiles: false,
};