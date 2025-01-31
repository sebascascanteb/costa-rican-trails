import React  from 'react'
import '../css/Destinos.css'
import { motion } from "framer-motion"





export const Destinos = (props) => {
  return (
    <motion.div className='contenedor-destino' >
      <img className='imagen-destino' src={require(`../images/${props.imagendestino}.jpg`)} alt="Foto del destino" />
      <div className='contenedor-descripcion'>
        <p className='nombre-destino'>{props.nombredestino}</p>
        <p className='descripcion-destino'>{props.descripciondestino}</p>
        <motion.div
        className="box"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.a
          whileHover={{ scale: 1.1 }}
          onHoverStart={e => { }}
          onHoverEnd={e => { }}
          href={props.url}
          className='hipervinculo-destino'
        >
          Abrir información
        </motion.a>
      </motion.div>       
      </div>
    </motion.div>
  )
}
