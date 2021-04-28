const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {``
      alert('Failed to create project');
    }
  }
  postwriter.classList.add('display-none')
  postwrite.classList.remove('display-none')
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

const formRender = async (event) => {
  event.preventDefault();
  let postwriter = document.querySelector('.pwriter')
  let postwrite = document.querySelector('.postwrite')
  postwriter.classList.remove('display-none')
  postwrite.classList.add('display-none')

}

document
  .querySelector('.postwrite')
  .addEventListener('click', formRender);
document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.update-project-form')
  .addEventListener('submit', updateFormHandler);
