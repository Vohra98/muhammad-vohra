import BallCanvas from "./BallCanvas"

import { technologies } from '@/constants'

const Technologies = () => {

  console.log(technologies);
  return (
    <div className="pt-12 flex flex-wrap items-center justify-evenly gap-12 ">
      {technologies.map((tech, i) => (
        <div key={i} className="flex flex-col justify-center items-center w-[200px]">
          <BallCanvas icon={tech.icon} />
          <h6>{tech.name}</h6>
        </div>
      ))}
    </div>
  )
}

export default Technologies