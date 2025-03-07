import React from 'react'

export const SearchFilter = ({search, setSearch, filter, setFilter}) => {
    const handleInputChange = (e)=>{
        e.preventDefault()
        setSearch(e.target.value);
    }
    const handleSelectChange = (e)=>{
        e.preventDefault()
        setFilter(e.target.value);
    }
  return (
    <section className='section-searchFilter' value={filter} onChange={handleSelectChange}>
        <input type="text" placeholder='Search Country name' value={search} onChange={handleInputChange} />
        <div>
            <select className='select-section'>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Oceanias</option>

            </select>
        </div>
    </section>
  )
}
