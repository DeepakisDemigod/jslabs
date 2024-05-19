import React from 'react';

const CreateLab = () => {

  return (
    <div className='font-ibm bg-neutral flex items-center justify-center'>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className=' text-white'
        onClick={() => document.getElementById('my_modal_2').showModal()}
      >
        + Create Lab
      </button>
      <dialog
        id='my_modal_2'
        className='modal'
      >
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>Create a Lab</h3>
          <p className='py-4'>Template</p>
          <label className='input input-bordered flex items-center gap-2'>
            <input
              list='templates'
              type='search'
              className='grow'
              placeholder='JavaScript'
            />
            <datalist id='templates'>
              <option value='Static Pages'>HTML,CSS & JS</option>
              <option value='React JavaScript' />
              <option value='Vanilla JavaScript' />
              <option value='Node JavaScript' />
            </datalist>
          </label>
          <br/>
          <div>
            <button className='btn w-full w-min-70 w-max-100 bg-neutral'>
              Create Lab
            </button>
          </div>
        </div>
        <form
          method='dialog'
          className='modal-backdrop'
        >
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default CreateLab;
