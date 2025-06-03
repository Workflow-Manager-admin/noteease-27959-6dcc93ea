import React, { useState } from 'react';
import './App.css';

// Sample data for demonstration
const sampleNotes = [
  {
    id: 1,
    title: "Meeting Notes",
    content: "Discussed project timeline and deliverables for Q4. Need to follow up on budget allocation...",
    category: "Work",
    createdAt: new Date('2024-01-15')
  },
  {
    id: 2,
    title: "Grocery List",
    content: "Milk, bread, eggs, cheese, apples, chicken, vegetables for the week...",
    category: "Personal",
    createdAt: new Date('2024-01-14')
  },
  {
    id: 3,
    title: "Book Ideas",
    content: "1. The art of effective communication 2. Building resilient teams 3. Innovation in digital age...",
    category: "Ideas",
    createdAt: new Date('2024-01-13')
  },
  {
    id: 4,
    title: "Travel Plans",
    content: "Summer vacation to Europe. Check flights to Paris, book hotels in Rome, research local attractions...",
    category: "Travel",
    createdAt: new Date('2024-01-12')
  }
];

const categories = ["All", "Work", "Personal", "Ideas", "Travel"];

function App() {
  const [notes, setNotes] = useState(sampleNotes);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter notes based on search term and category
  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || note.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // PUBLIC_INTERFACE
  const handleSearch = (term) => {
    /**
     * Handle search functionality
     * @param {string} term - The search term entered by user
     */
    setSearchTerm(term);
  };

  // PUBLIC_INTERFACE
  const handleCategoryFilter = (category) => {
    /**
     * Handle category filtering
     * @param {string} category - The selected category
     */
    setSelectedCategory(category);
  };

  // PUBLIC_INTERFACE
  const handleAddNote = () => {
    /**
     * Placeholder for adding new note functionality
     */
    console.log('Add new note - to be implemented');
    // Future implementation: Open note creation modal/page
  };

  // PUBLIC_INTERFACE
  const handleEditNote = (noteId) => {
    /**
     * Placeholder for editing note functionality
     * @param {number} noteId - The ID of the note to edit
     */
    console.log(`Edit note ${noteId} - to be implemented`);
    // Future implementation: Open note editing modal/page
  };

  // PUBLIC_INTERFACE
  const handleDeleteNote = (noteId) => {
    /**
     * Placeholder for deleting note functionality
     * @param {number} noteId - The ID of the note to delete
     */
    console.log(`Delete note ${noteId} - to be implemented`);
    // Future implementation: Confirm and delete note
    setNotes(notes.filter(note => note.id !== noteId));
  };

  return (
    <div className="app">
      {/* Header with app name */}
      <header className="app-header">
        <div className="container">
          <h1 className="app-title">NoteEase</h1>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          {/* Search Bar */}
          <div className="search-section">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search notes..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="search-input"
              />
              <div className="search-icon">🔍</div>
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="category-section">
            <div className="category-chips">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-chip ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Notes List */}
          <div className="notes-section">
            <div className="notes-grid">
              {filteredNotes.length === 0 ? (
                <div className="no-notes">
                  <p>No notes found</p>
                  <p className="no-notes-subtitle">
                    {searchTerm || selectedCategory !== 'All' 
                      ? 'Try adjusting your search or filter' 
                      : 'Create your first note to get started'}
                  </p>
                </div>
              ) : (
                filteredNotes.map(note => (
                  <div key={note.id} className="note-item" onClick={() => handleEditNote(note.id)}>
                    <div className="note-header">
                      <h3 className="note-title">{note.title}</h3>
                      <button 
                        className="note-delete"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteNote(note.id);
                        }}
                      >
                        ×
                      </button>
                    </div>
                    <p className="note-content">{note.content.substring(0, 120)}...</p>
                    <div className="note-footer">
                      <span className="note-category">{note.category}</span>
                      <span className="note-date">
                        {note.createdAt.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <button className="fab" onClick={handleAddNote} title="Add new note">
        +
      </button>
    </div>
  );
}

export default App;
