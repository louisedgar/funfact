fetch("http://5e19bc3ccc623b00146789fc.mockapi.io/funfact/facts")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    const output = id => data.filter(el => el.id === id);
    console.log(output(3));
  });
