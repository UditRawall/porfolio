import './AboutSection.css';


const arrowSvg = (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    data-slot="icon"
    style={{height:"1rem",width:'1rem',verticalAlign:'middle'}}
  >
    <path
      fill-rule="evenodd"
      d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
      clip-rule="evenodd"
    ></path>
  </svg>);

const ConnectSection = () => {
  return (
    <section className='about-main'>
        <h2>Connect</h2>
        <ul className='about-main-list'>
            <li>
                <div>
                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path></svg></span>
                    My Email

                    {arrowSvg}
                </div>
            </li>
        </ul>
    </section>
)
}

export default ConnectSection