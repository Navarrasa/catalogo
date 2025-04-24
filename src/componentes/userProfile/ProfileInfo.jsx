import styles from './profileinfo.module.css';

export function ProfileInfo({ userData, isEditing, setUserData }) {
  const fields = [
    { label: 'Nome', key: 'name', type: 'text' },
    { label: 'Idade', key: 'age', type: 'number' },
    { label: 'Apelido', key: 'nickname', type: 'text' },
    { label: 'Data de Nascimento', key: 'birthdate', type: 'date' },
    { label: 'Filme Favorito', key: 'favoriteMovie', type: 'text' },
    { label: 'Série Favorita', key: 'favoriteSeries', type: 'text' },
  ];

  const handleChange = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  return (
    <div className={styles.infoContainer}>
      {fields.map(({ label, key, type }) => (
        <div key={key} className={styles.infoRow}>
          <label className={styles.label}>{label}:</label>
          {isEditing ? (
            <input
              type={type}
              value={userData[key] || ''}
              onChange={(e) => handleChange(key, e.target.value)}
              className={styles.input}
            />
          ) : (
            <span className={styles.value}>{userData[key] || 'Não informado'}</span>
          )}
        </div>
      ))}
    </div>
  );
}