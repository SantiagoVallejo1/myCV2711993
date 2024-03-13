import React from 'react'
import "./main.css"

function Main() {
  return (
    <div className='main'>        
        <h2>Habilidades</h2>
        <div className="cvMain">
            <ul className='ListaHabilidadesMain'>
                <li>HTML</li>           
                <li>CSS</li>
                <li>JavaScript</li>
                <li>NodeJS</li>
                <li>Java</li>              
                <li>React</li>         
                <li>BootStrap</li>   
            </ul>
        </div>
        <h2>Educación</h2>
        <div className="cvMain">          
            <p>Análisis y desarrollo de Sofware / 17 de abril del 2023 - Actualidad / SENA</p>
            <p>Técnico en operación turistica local / 15 de febrero del 2021 - 06 de diciembre del 2022 / SENA</p>
            <p>Bachiller académico / 06 de diciembre del 2022 / I.E Enrique Millan Rubio</p>             
        </div>
        <h2>Experiencia laboral</h2>
        <div className="cvMain">
          {/* <p><strong>Desarrollador WebFullStack.</strong> Digital House. 6 meses. Tecnologías empleadas: HTML, CSS, JAVASCRIPT, NODEJS, REACT
            SEQUELIZE, EXPRESS, SQL. Proyecto desarrollado: https://myecommerce.onrender.com/</p>
          <p><strong>Docente y asesor del área informática.</strong> Magisterio RISARALDA. 16 meses. Tecnologías empleadas: C++, VISUALBASIC</p>
          <p><strong>Instructor de informática. (ANÁLISIS Y DESARROLLO DE SOFTWARE, EXCEL AVANZADO, BD, ESTADÍSTICA, MATEMÁTICA, ÁLGEBRA).</strong>SENA. 13 Años. Tecnologías empleadas: PYTHON, VISUALBASIC, SQL, HTML, CSS, JavaScript, NODE JS, REACTJS, TAILWINDCSS, BOOTSTRAP</p>
          <p><strong></strong></p>               */}
        </div>
        <h2>Proyectos desarrollados</h2>
        <div className="cvMain">
          {/* <ul>
          <li><p>Tienda virtual. <a href='https://myecommerce.onrender.com/'>https://myecommerce.onrender.com/</a></p></li>
          <li><p>Programador de cursos complementarios (VisualBasic).</p></li>
          <li><p>Validador de usuarios registrados en senasofiaplus.edu.co (Automatización).</p></li>
          <li><p>Registrador de usuarios en senasofiaplus.edu.co (Automatización).</p></li>
          <li><p>Programador de cursos complementarios. <a href="https://programador-cursos.onrender.com/#/">https://programador-cursos.onrender.com/#/</a></p></li>
          <li><p>Entorno prácticas concurso DIAN        <a href='https://simulacrosdian.onrender.com/'>https://simulacrosdian.onrender.com/</a></p></li>
           </ul> */}
        </div>
        <h2>Formación Complementaria</h2>
        <div className="cvMain">
          <ul>
            <li>CURSO DE BILINGÜISMO CON ÉNFASIS EN INGLÉS - UNAD</li><br></br>
            <li>CURSO PROFESIONAL DE GIT Y GITHUB - PLATZI</li> <br></br>
            <li>CURSO DEFINITIVO DE HTML Y CSS</li><br></br>
          </ul>
        </div>
        
    </div>
  )
}

export default Main