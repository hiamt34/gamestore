export default context => ({
  toast: async (icon, title) => {
    const Toast = await context.app.$swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', context.app.$swal.stopTimer)
        toast.addEventListener('mouseleave', context.app.$swal.resumeTimer)
      }
    })
    Toast.fire({
      icon,
      title
    })
  },
  alert: async (icon, title, cancelButtonText, confirmButtonText, redirectName) => {
    await context.app.$swal({
      title,
      icon,
      showCancelButton: true,
      cancelButtonText,
      cancelButtonColor: '#be4f52',
      confirmButtonText
    }).then((result) => {
      if (result.isConfirmed) {
        context.app.router.push({ name: redirectName })
      }
    })
  }
})
