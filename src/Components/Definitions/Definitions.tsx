import React from 'react'


const Definitions = ({search, meanings}: any) => {
  return (
    <div className="definitions">
        {search === "" ? (
            <span className="subtitle">Search for your word</span>
        ) : (
            meanings.map((mean: any) => 
                mean.meanings.map((item: any) => 
                    item.definitions.map((def: any) => (
                        <div className="definition">
                            <b>{def.definition}</b>
                            {
                                def.example && (
                                    <span>
                                        <b>Example: </b> {def.example}
                                    </span>
                                )
                            }
                           {/*  {
                                def.synonyms && (
                                <span>
                                    <b>Synonyms :</b> {def.synonyms.map((s: any) => `${s}, `)}
                                </span>
                                )
                            } */}

                            <hr />
                        </div>
                    )   
                ))
            )
        )}
    </div>
  )
}

export default Definitions