function Home() {
    const containerStyle = {
        maxWidth: '600px',
        margin: '20px auto',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f5f5f5',
    };
    const titleStyle = {
        fontWeight: 'bold',
        fontSize: '24px',
        fontFamily: 'Arial, sans-serif',
        marginTop: '20px',
        color: '#333',
    };
    const itemStyle = {
        fontSize: '18px',
        fontFamily: 'Arial, sans-serif',
        marginLeft: '20px',
        color: '#555',
    };

    return (
        <div style={containerStyle}>
            <dl>
                <dt style={titleStyle}>Ex-foodlovers</dt>
                <dd style={itemStyle}>Cainan</dd>
                <dd style={itemStyle}>Leonardo Sato</dd>
                <dd style={itemStyle}>Medina</dd>
                <dt style={titleStyle}>Futuros ex-foodlovers</dt>
                <dd style={itemStyle}>Felipe Kenji</dd>
                <dd style={itemStyle}>Pedro perez</dd>
                <dt style={titleStyle}>Futuro indefinido</dt>
                <dd style={itemStyle}>Terada</dd>
                <dd style={itemStyle}>Rafael Belinelli</dd>
                <dt style={titleStyle}>Efetivados</dt>
                <dd style={itemStyle}>Fabrícião</dd>
            </dl>
        </div>
    );
}

export default Home;