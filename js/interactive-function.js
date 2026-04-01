// Search Data
const searchData = [
    {
        url: "index.html",
        title: "Welcome to the Science Communication Platform!",
        content: "This is the Science Communication Platform of the Faculty of Science. We cater to individuals from various scientific academic backgrounds, from students to researchers. As part of our platform, we are organizing a series of events around various aspects of science communication, which should be seen as supporting your courses or research.",
        keywords: ["welcome", "introduction", "platform", "faculty", "science", "students", "researchers", "events", "communication"]
    },
    {
        url: "why-communicate.html",
        title: "Why to communicate?",
        content: "Communication is an overlooked science. It's important for 'regular' people who aren't scientists to understand the ideas that scientists have.",
        sections: [
            {
                title: "Communication- An Overlooked Science",
                content: "Oftentimes scientists can feel like it's not worth it because the general public will never understand- that's not true! These reasons are why we created this page. Trust us, it will be easy and simple to learn how to communicate with other scientists, the general public, and anyone after this page."
            },
            {
                title: "Bridging the Gap",
                content: "It's important for 'regular' people who aren't scientists and to understand the ideas that scientists have. If we don't have any way to communicate with the general public, there will be a disconnection between scientists & the rest of the world."
            },
            {
                title: "Funding your Dreams",
                content: "If you can't communicate, you likely won't be able to convince others on why your scientific work matters. Politicians specifically may not be convinced if you lack the ability to communicate why your idea is worth funding."
            },
            {
                title: "Fake News Fake News Fake News",
                content: "As educated scientists, we hold a responsibility to provide factual information to the general public. If the general public aren't educated/communicated with by scientists, politicians will have the power to spread misinformation."
            },
            {
                title: "Key Principles",
                content: "Effective scientific communication follows a clear narrative structure: Problem → Approach → Result → Impact. This framework helps organize thoughts and ensures the audience can follow the research journey from start to finish."
            }
        ],
        keywords: ["why", "communicate", "importance", "funding", "fake news", "principles", "gap", "overlooked", "science", "public", "politicians", "misinformation", "narrative", "structure", "problem", "approach", "result", "impact"]
    },
    {
        url: "what-communicate.html",
        title: "What to communicate?",
        content: "Understanding what to communicate is crucial for effective science communication. This page helps you identify the key elements of your research to share with different audiences.",
        sections: [
            {
                title: "Your Research Story",
                content: "Every research project has a story. Identify the narrative thread that connects your research question, methods, findings, and implications."
            },
            {
                title: "Key Messages",
                content: "Distill your research into 3-5 key messages that capture the essence of your work. These should be clear, concise, and relevant to your audience."
            },
            {
                title: "Audience Relevance",
                content: "Consider why your research matters to your specific audience. What are their interests, concerns, and priorities? How does your work relate to their world?"
            },
            {
                title: "Visual Elements",
                content: "Identify the visual aspects of your research that can help communicate complex ideas. This might include graphs, diagrams, images, or videos."
            },
            {
                title: "Common Language",
                content: "Translate technical terminology into everyday language. Avoid jargon and explain concepts in ways that are accessible to your audience."
            }
        ],
        keywords: ["what", "communicate", "research", "story", "messages", "audience", "relevance", "visual", "language", "jargon", "terminology", "narrative", "methods", "findings", "implications"]
    },
    {
        url: "how-communicate.html",
        title: "How to communicate?",
        content: "This page explores different methods and techniques for effective science communication across various platforms and audiences.",
        sections: [
            {
                title: "Oral Presentations",
                content: "Learn techniques for delivering engaging and clear presentations, including structuring your talk, using visual aids effectively, and handling questions."
            },
            {
                title: "Written Communication",
                content: "Explore strategies for writing about science for different audiences, from academic papers to popular articles, blogs, and social media posts."
            },
            {
                title: "Visual Communication",
                content: "Discover how to create effective visual representations of your research, including data visualization, infographics, and scientific illustrations."
            },
            {
                title: "Digital Media",
                content: "Learn how to leverage digital platforms for science communication, including social media, podcasts, videos, and interactive websites."
            },
            {
                title: "Interpersonal Communication",
                content: "Develop skills for one-on-one and small group discussions about your research, including active listening and responding to questions."
            }
        ],
        keywords: ["how", "communicate", "presentations", "writing", "visual", "digital", "media", "interpersonal", "techniques", "strategies", "platforms", "audiences", "visualization", "infographics", "podcasts", "videos", "social media"]
    },
    {
        url: "where-when-communicate.html",
        title: "Where & When to communicate?",
        content: "This page helps you choose the right venue and timing for your science communication activities based on your audience and goals.",
        sections: [
            {
                title: "When to communicate?",
                content: "Communication is an ongoing part of academic life, not only reserved for formal presentations. Regular opportunities include colloquia, lunch lectures, group meetings, and seminars. Informal initiatives like student-led events offer supportive environments to improve. Public engagement through science cafés, outreach events, and open days help translate research to broader audiences."
            },
            {
                title: "Where to Communicate?",
                content: "You can practice your communication skills in various settings. Category 1: The Inner Circle (Peer-to-Peer) includes Symposia & Colloquia, International Conferences, and Café Lorentz. Category 2: The Public Domain (Societal Outreach) includes Museums & Observatories, Science Centres, Public Schools, and Pint of Science / Science Café. Category 3: The Power Players (Policy & Funding) includes Government & Policy Institutions, NWO / Funding Workshops, Industry Pitch Days, and Invited Lectures."
            }
        ],
        keywords: ["where", "when", "communicate", "venues", "timing", "audiences", "goals", "colloquia", "conferences", "cafés", "outreach", "museums", "schools", "policy", "funding", "workshops", "pitch", "lectures"]
    },
    {
        url: "practice-skills.html",
        title: "Practice your skills!",
        content: "Visit a weekly low-key practice session! You practice your presentation skills or show your written articles to get constructive input from ICSs and peers. (Get a free drink if you present or bring your article!) - Friday @ The Science Brasserie, 17:15 (walk-in). Book a personal training with your ICS (institute communication specialist) via the Leiden Career Zone website.",
        keywords: ["practice", "skills", "training", "session", "presentation", "articles", "feedback", "ICS", "peers", "drink", "Science Brasserie", "Friday", "Career Zone", "personal", "training"]
    },
    {
        url: "contact.html",
        title: "Contact information",
        content: "Contact your ICS (institute communication specialist) for any questions, if you need help with communicating or if you have a great idea. Email: ics_institutename_@science.leidenuniv.nl. Find your ICS here: https://ICSscience.abrdns.com/. Book a training via the Leiden Career zone: https://careerzone.universiteitleiden.nl/",
        keywords: ["contact", "information", "ICS", "institute", "communication", "specialist", "email", "training", "Career zone", "questions", "help", "idea"]
    }
];

// Simple Interactive Functions
document.addEventListener('DOMContentLoaded', function() {
    // Search Functionality
    const searchInputs = document.querySelectorAll('input[placeholder="Search Skills"]');
    const searchButtons = document.querySelectorAll('button.absolute.right-2.top-1\\/2.transform.-translate-y-1\\/2.text-gray-500');
    const searchModal = document.getElementById('search-modal');
    const modalSearchInput = document.getElementById('modal-search-input');
    const modalSearchButton = document.getElementById('modal-search-button');
    const closeSearchModal = document.getElementById('close-search-modal');
    const searchResultsContainer = document.getElementById('search-results-container');
    const searchStatus = document.getElementById('search-status');
    
    // Debounce function to prevent excessive searching
    function debounce(func, delay) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), delay);
        };
    }
    
    // Search function
    function performSearch(query) {
        if (!query.trim()) {
            showSearchStatus('Please enter a search term');
            return;
        }
        
        showSearchStatus('Searching...', 'loading');
        
        // Simulate search delay for better UX
        setTimeout(() => {
            const results = [];
            const lowerQuery = query.toLowerCase();
            
            // Search through all pages and sections
            searchData.forEach(page => {
                // Check page title
                if (page.title.toLowerCase().includes(lowerQuery)) {
                    results.push({
                        url: page.url,
                        title: page.title,
                        snippet: page.content.substring(0, 150) + (page.content.length > 150 ? '...' : ''),
                        type: 'page',
                        relevance: 3
                    });
                }
                
                // Check page content
                if (page.content.toLowerCase().includes(lowerQuery)) {
                    // Find the position of the query in the content
                    const position = page.content.toLowerCase().indexOf(lowerQuery);
                    const start = Math.max(0, position - 50);
                    const end = Math.min(page.content.length, position + query.length + 100);
                    let snippet = page.content.substring(start, end);
                    
                    if (start > 0) snippet = '...' + snippet;
                    if (end < page.content.length) snippet = snippet + '...';
                    
                    results.push({
                        url: page.url,
                        title: page.title,
                        snippet: snippet,
                        type: 'content',
                        relevance: 2
                    });
                }
                
                // Check keywords
                if (page.keywords && page.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))) {
                    results.push({
                        url: page.url,
                        title: page.title,
                        snippet: page.content.substring(0, 150) + (page.content.length > 150 ? '...' : ''),
                        type: 'keyword',
                        relevance: 1
                    });
                }
                
                // Check sections if they exist
                if (page.sections) {
                    page.sections.forEach(section => {
                        if (section.title.toLowerCase().includes(lowerQuery) || 
                            section.content.toLowerCase().includes(lowerQuery)) {
                            
                            // Find the position of the query in the section content
                            const position = section.content.toLowerCase().indexOf(lowerQuery);
                            const start = Math.max(0, position - 50);
                            const end = Math.min(section.content.length, position + query.length + 100);
                            let snippet = section.content.substring(start, end);
                            
                            if (start > 0) snippet = '...' + snippet;
                            if (end < section.content.length) snippet = snippet + '...';
                            
                            results.push({
                                url: page.url,
                                title: `${page.title} - ${section.title}`,
                                snippet: snippet,
                                type: 'section',
                                relevance: 2
                            });
                        }
                    });
                }
            });
            
            // Remove duplicate results
            const uniqueResults = results.filter((result, index, self) =>
                index === self.findIndex(r => r.url === result.url && r.title === result.title)
            );
            
            // Sort results by relevance
            uniqueResults.sort((a, b) => b.relevance - a.relevance);
            
            // Display results
            if (uniqueResults.length === 0) {
                showSearchStatus(`No results found for "${query}"`);
            } else {
                displaySearchResults(uniqueResults, query);
            }
        }, 300);
    }
    
    // Display search results
    function displaySearchResults(results, query) {
        searchResultsContainer.innerHTML = '';
        searchStatus.classList.add('hidden');
        
        const resultsList = document.createElement('ul');
        resultsList.className = 'space-y-4';
        
        results.forEach(result => {
            const listItem = document.createElement('li');
            
            // Create link element
            const link = document.createElement('a');
            link.href = result.url;
            link.className = 'block p-3 hover:bg-blue-50 rounded-lg transition-colors duration-200';
            
            // Create title element
            const title = document.createElement('h3');
            title.className = 'text-lg font-semibold text-blue-800 mb-1';
            title.innerHTML = highlightText(result.title, query);
            
            // Create snippet element
            const snippet = document.createElement('p');
            snippet.className = 'text-gray-700 text-sm';
            snippet.innerHTML = highlightText(result.snippet, query);
            
            // Create meta info
            const meta = document.createElement('div');
            meta.className = 'text-xs text-gray-500 mt-1';
            
            // Add icon based on result type
            let icon = '';
            switch (result.type) {
                case 'page':
                    icon = '<i class="fa fa-file-text-o mr-1"></i>';
                    break;
                case 'section':
                    icon = '<i class="fa fa-list mr-1"></i>';
                    break;
                case 'content':
                    icon = '<i class="fa fa-paragraph mr-1"></i>';
                    break;
                case 'keyword':
                    icon = '<i class="fa fa-tags mr-1"></i>';
                    break;
            }
            
            meta.innerHTML = `${icon} ${result.url}`;
            
            // Assemble the link
            link.appendChild(title);
            link.appendChild(snippet);
            link.appendChild(meta);
            
            // Add click event to close modal and navigate
            link.addEventListener('click', function(e) {
                searchModal.classList.add('hidden');
            });
            
            listItem.appendChild(link);
            resultsList.appendChild(listItem);
        });
        
        searchResultsContainer.appendChild(resultsList);
    }
    
    // Highlight text matching the query
    function highlightText(text, query) {
        if (!query) return text;
        
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return text.replace(regex, '<span class="bg-yellow-200">$1</span>');
    }
    
    // Show search status messages
    function showSearchStatus(message, type = 'info') {
        searchResultsContainer.innerHTML = '';
        searchStatus.textContent = message;
        searchStatus.className = 'p-4 text-center';
        
        if (type === 'loading') {
            searchStatus.classList.add('text-blue-600');
            searchStatus.innerHTML = '<i class="fa fa-spinner fa-spin mr-2"></i>' + message;
        } else if (type === 'error') {
            searchStatus.classList.add('text-red-600');
        } else {
            searchStatus.classList.add('text-gray-500');
        }
        
        searchStatus.classList.remove('hidden');
    }
    
    // Open search modal
    function openSearchModal() {
        searchModal.classList.remove('hidden');
        modalSearchInput.focus();
    }
    
    // Close search modal
    function closeSearchModalFunc() {
        searchModal.classList.add('hidden');
        searchResultsContainer.innerHTML = '';
        searchStatus.classList.add('hidden');
        modalSearchInput.value = '';
    }
    
    // Add event listeners to search buttons
    searchButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const input = this.parentElement.querySelector('input');
            if (input.value.trim()) {
                modalSearchInput.value = input.value;
                openSearchModal();
                performSearch(input.value);
            } else {
                openSearchModal();
            }
        });
    });
    
    // Add event listeners to search inputs
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (this.value.trim()) {
                    if (this.id === 'modal-search-input') {
                        performSearch(this.value);
                    } else {
                        modalSearchInput.value = this.value;
                        openSearchModal();
                        performSearch(this.value);
                    }
                }
            }
        });
        
        // Add debounced input event for modal search
        if (input.id === 'modal-search-input') {
            input.addEventListener('input', debounce(function() {
                if (this.value.trim()) {
                    performSearch(this.value);
                } else {
                    searchResultsContainer.innerHTML = '';
                    searchStatus.textContent = 'Please enter a search term';
                    searchStatus.className = 'p-4 text-center text-gray-500';
                    searchStatus.classList.remove('hidden');
                }
            }, 300));
        }
    });
    
    // Add event listener to modal search button
    modalSearchButton.addEventListener('click', function() {
        if (modalSearchInput.value.trim()) {
            performSearch(modalSearchInput.value);
        }
    });
    
    // Add event listener to close button
    closeSearchModal.addEventListener('click', closeSearchModalFunc);
    
    // Close modal when clicking outside
    searchModal.addEventListener('click', function(e) {
        if (e.target === searchModal) {
            closeSearchModalFunc();
        }
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K to open search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearchModal();
        }
        
        // Escape to close search
        if (e.key === 'Escape' && !searchModal.classList.contains('hidden')) {
            closeSearchModalFunc();
        }
    });
    
    // Navigation Link Click Effect
    const navLinks = document.querySelectorAll('.nav-link, .sidebar-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                
                // Remove active state from sibling links
                const siblings = Array.from(this.parentElement.parentElement.children);
                siblings.forEach(sibling => {
                    const siblingLink = sibling.querySelector('a');
                    if (siblingLink) {
                        siblingLink.classList.remove('nav-link-active', 'sidebar-link-active');
                    }
                });
                
                // Add active state to current link
                this.classList.add(this.classList.contains('nav-link') ? 'nav-link-active' : 'sidebar-link-active');
                
                // Show click feedback
                const linkText = this.textContent.trim();
                if (linkText !== 'Home') {
                    alert('Navigation function: You clicked on "' + linkText + '", which would take you to the corresponding page.');
                }
            }
        });
    });
    
    // Feature Card Interaction
    const featureCards = document.querySelectorAll('.bg-blue-50, .bg-green-50, .bg-yellow-50');
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            alert('Feature card: You clicked on the "' + title + '" card.');
        });
    });
    
    // Mobile Menu Toggle
    const menuButton = document.querySelector('button.md\\:hidden');
    const mainNav = document.querySelector('nav.container.mx-auto.px-4.py-3 .hidden.md\\:flex');
    
    if (menuButton && mainNav) {
        menuButton.addEventListener('click', function() {
            if (mainNav.classList.contains('hidden')) {
                mainNav.classList.remove('hidden');
                mainNav.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-primary', 'z-10');
            } else {
                mainNav.classList.add('hidden');
                mainNav.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-primary', 'z-10');
            }
        });
    }
});

// Sub-tabs Functionality
            const subtabLinks = document.querySelectorAll('.subtab-link');
            const subtabContents = document.querySelectorAll('.subtab-content');
            
            subtabLinks.forEach(link => {
                link.addEventListener('click', function() {
                    const targetTab = this.getAttribute('data-tab');
                    
                    // Remove active state from all tabs
                    subtabLinks.forEach(l => l.classList.remove('subtab-link-active'));
                    subtabContents.forEach(c => c.classList.remove('subtab-content-active'));
                    
                    // Add active state to clicked tab and corresponding content
                    this.classList.add('subtab-link-active');
                    document.getElementById(targetTab + '-content').classList.add('subtab-content-active');
                });
            });