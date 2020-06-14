import React from 'react';
import Dropzone from 'react-dropzone';
import Grid from '@material-ui/core/Grid';

const DropZoneMultipleField = props => {
  const { name, value, onChange } = props;
  const onDrop = files => {
    const { onChange } = props;
    console.log(onChange);
    onChange(
      files.map(fl =>
        Object.assign(fl, {
          preview: URL.createObjectURL(fl)
        })
      )
    );
  };

  const removeFile = (index, e) => {
    e.preventDefault();
    onChange(value.filter((val, i) => i !== index));
  };

  const files = value;

  return (
    <div className="dropzone dropzone--multiple">
      <Dropzone
        className="dropzone__input"
        accept="image/jpeg, image/png"
        name={name}
        onDrop={filesToUpload => {
          onDrop(value ? value.concat(filesToUpload) : filesToUpload);
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone__input">
            {(!files || files.length === 0) && (
              <Grid container alignItems={'center'} justify={'center'}>
                <Grid item>Drop file here to upload</Grid>
              </Grid>
            )}
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
      {files && Array.isArray(files) && (
        <div className="dropzone__imgs-wrapper">
          {files.map((file, i) => (
            <div
              className="dropzone__img"
              key={i}
              style={{ backgroundImage: `url(${file.preview})` }}
            >
              <p className="dropzone__img-name">{file.name}</p>
              <button
                className="dropzone__img-delete"
                type="button"
                onClick={e => removeFile(i, e)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const renderDropZoneMultipleField = props => {
  const { input } = props;
  return <DropZoneMultipleField {...input} />;
};

export default renderDropZoneMultipleField;
