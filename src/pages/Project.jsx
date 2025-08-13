import FolderIcon from '@mui/icons-material/Folder';

export default function Project() {
    //todo: Icon & Heading -
    const header = [
        { icon: <FolderIcon />, heading: 'Projects' }
    ];

    return (
        <>
            <section>
                {/* Header */}
                {
                    header.map((item, idx) => (
                        <header key={idx}>
                            <div className="folderIcon">{item.icon}</div>
                            <div className="heading">{item.heading}</div>
                        </header>
                    ))
                }
            </section>
        </>
    );
}