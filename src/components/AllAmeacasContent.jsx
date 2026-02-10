import React from 'react';
import AmeacaContent from './AmeacaContent';

const AllAmeacasContent = React.forwardRef(({ ameacas }, ref) => {
    return (
        <div ref={ref} className="bg-white">
            {ameacas.map((ameaca, index) => (
                <div key={ameaca.id} style={{ pageBreakInside: 'avoid' }}>
                    <AmeacaContent ameaca={ameaca} />
                </div>
            ))}
        </div>
    );
});

export default AllAmeacasContent;