import React from 'react';
const Table = ({ articles }) => {
    return (
        <table border="2">
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {(articles.length > 0) ? articles.map((article, index) => {
                    return (
                        <tr key={index}>
                            <td>{article.author}</td>
                            <td>{article.title}</td>
                        </tr>
                    )
                }) : <tr><td colSpan="5">Loading...</td></tr>}
            </tbody>
        </table>
    );
}

export default Table