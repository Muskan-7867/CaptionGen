export const copyCaption = async(data:string)=>{

    try {
      const textToCopy = data || ''
      await navigator.clipboard.writeText(textToCopy)
    } catch (error) {
      console.log('failed to copy caption');
      
    }
  }