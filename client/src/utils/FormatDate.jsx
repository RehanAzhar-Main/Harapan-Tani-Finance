function formatDate(inputDate) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(inputDate).toLocaleDateString('id-ID', options);
    return formattedDate;
  }


export {formatDate}