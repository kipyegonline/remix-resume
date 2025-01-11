

export default function Footer() {
  return (
    <footer className='p-4 flex flex-col items-center bg-blue-800 text-white absolute bottom-0  left-0 right-0'>
    <p> &copy; {new Date().getFullYear()} All Rights Reserved</p>
  </footer>
  )
}
