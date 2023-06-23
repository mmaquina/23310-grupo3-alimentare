import React from "react";

export default function SectionContact() {
  return (
    <section className='container-fluid p-5' id="contact">
        <div className='card'>
          <div className='card-head pt-3 ps-3'>
            <h3 className="text-center">Contactanos</h3>
          </div>
          <div className='card-body'>
            <form>
              <div className='input-group mt-3 mb-3'>
                <span className='input-group-text'>
                    <i className="fas fa-male"></i>
                </span>
                <input
                  className='form-control'
                  type='text'
                  name='name'
                  placeholder='Insert name'
                  required></input>
              </div>
              <div className='input-group mb-3'>
                <span className='input-group-text'>
                    <i className="fas fa-envelope"></i>
                </span>
                <input
                  className='form-control'
                  type='email'
                  name='email'
                  placeholder='Insert email'
                  required></input>
              </div>
              <input type='submit' className='btn btn-success'></input>
            </form>
          </div>
        </div>
    </section>
  );
}