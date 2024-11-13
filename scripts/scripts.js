// Populate subcategory dropdown based on selected category
$('input[name="category"]').on('change', function() {
    const subcategory = $('#subcategory');
    subcategory.empty(); // Clear existing options
  
    let options = [];
    if (this.value === 'Yes') {
      options = ['-- Select a subcategory --','Cat','Dog','Hamster','Fish','Other'];
    } else if (this.value === 'No') {
      options = ['-- Select a subcategory --','I am weird'];
    }
  
    options.forEach(option => {
      $('<option>', { value: option, text: option }).appendTo(subcategory);
    });
  });
  
  // Handle form submission and display values
  $('#submitButton').on('click', function() {
    const name = $('#name').val();
    const category = $('input[name="category"]:checked').val();
    const subcategory = $('#subcategory').val();
    const subscribe = $('#subscribe').is(':checked') ? 'Yes' : 'No';
    const satisfaction = $('#satisfaction').val();
  
    const output = `
      <h4>Form Data</h4>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Category:</strong> ${category}</p>
      <p><strong>Subcategory:</strong> ${subcategory}</p>
      <p><strong>Subscribed:</strong> ${subscribe}</p>
      <p><strong>Satisfaction Level:</strong> ${satisfaction}</p>
    `;
    $('#output').html(output);
  });
  