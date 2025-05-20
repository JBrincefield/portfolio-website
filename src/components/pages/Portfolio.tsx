import React, { useEffect, useState, useMemo } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Search } from 'lucide-react';

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    created_at: string;
    updated_at: string;
    topics: string[];
    isManual?: boolean;
    }

const GithubProjects: React.FC = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState<'created_desc' | 'created_asc' | 'updated_desc' | 'updated_asc' | 'az' | 'za'>('created_desc');
    const [tagFilter, setTagFilter] = useState<string>('All');

    const username = 'JBrincefield';

    const manualProjects: Repo[] = [
        {
        id: 100001,
        name: "PRO100-dungeon",
        description: "A Unity game project for dungeon generation and exploration.",
        html_url: "https://github.com/snxethan/PRO100-dungeon",
        created_at: "2024-08-27T00:00:00Z",
        updated_at: "2024-10-02T00:00:00Z",
        topics: ["unity", "dungeon", "game-dev", "collaboration"],
        isManual: true
    },
    {
        id: 100004,
        name: "Rollio",
        description: "A collaborative Unity game where players roll through obstacles.",
        html_url: "https://github.com/Ghussy/Rollio",
        created_at: "2024-09-05T00:00:00Z",
        updated_at: "2024-10-15T00:00:00Z",
        topics: ["unity", "game-dev", "physics", "collaboration", "portfolio"],
        isManual: true
    },
    {
    id: 100005,
    name: "PRO200-MODO",
    description: "A collaborative project focused on modular design in Unity.",
    html_url: "https://github.com/snxethan/PRO200-MODO",
    created_at: "2025-01-12T00:00:00Z",
    updated_at: "2025-04-20T00:00:00Z",
    topics: ["unity", "modular", "design-patterns", "game-dev", "collaboration"],
    isManual: true
    },
    {
    id: 100006,
    name: "Artic_Cone",
    description: "A collaborative web drawing game developed using Next.js and Firebase.",
    html_url: "https://github.com/Neumont-VictorKeeler/Artic_Cone",
    created_at: "2025-02-15T00:00:00Z", // estimated creation date
    updated_at: "2025-04-25T00:00:00Z", // estimated last update
    topics: ["nextjs", "firebase", "websockets", "drawing", "collaboration", "game"],
    isManual: true
    },
    {
    id: 100007,
    name: "DBT200-Library",
    description: "A full-stack library management system built using Java and SQL technologies.",
    html_url: "https://github.com/snxethan/DBT200-Library",
    created_at: "2025-03-01T00:00:00Z", // estimated creation date
    updated_at: "2025-04-22T00:00:00Z", // estimated last update
    topics: ["java", "sql", "fullstack", "library", "management-system"],
    isManual: true
    },
    {
    id: 100008,
    name: "WaterfallChutesAndLadders",
    description: "A networked multiplayer version of Chutes and Ladders using Waterfall architecture.",
    html_url: "https://github.com/AnoyingWaffle66/WaterfallChutesAndLadders",
    created_at: "2024-11-10T00:00:00Z", // estimated creation date
    updated_at: "2025-01-15T00:00:00Z", // estimated last update
    topics: ["multiplayer", "networking", "java", "architecture", "game-dev", "collaboration"],
    isManual: true
    },
    {
    id: 100009,
    name: "DBT230-Library",
    description: "An extended version of the library system using Java, SQL, and advanced database concepts.",
    html_url: "https://github.com/snxethan/DBT230-Library",
    created_at: "2025-03-15T00:00:00Z", // estimated creation date
    updated_at: "2025-04-28T00:00:00Z", // estimated last update
    topics: ["java", "sql", "advanced-db", "library", "management-system"],
    isManual: true
    },
    ];

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=created`)
        .then(res => res.json())
        .then(data => {
            const validRepos = Array.isArray(data) ? data : [];
            setRepos([...validRepos, ...manualProjects]); // 🧠 Merge fetched + manual
        })
        .catch(err => {
            console.error('GitHub API error:', err);
            setRepos([...manualProjects]); // fallback to manual only
        });
    }, []);

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        repos.forEach(repo => repo.topics?.forEach(tag => tags.add(tag)));
        return ['All', ...Array.from(tags).sort()];
    }, [repos]);

    const filteredRepos = useMemo(() => {
        let r = [...repos];
        if (search) {
        const lower = search.toLowerCase();
        r = r.filter(repo => repo.name.toLowerCase().includes(lower) || repo.description?.toLowerCase().includes(lower));
        }
        if (tagFilter !== 'All') {
        r = r.filter(repo => repo.topics?.includes(tagFilter));
        }
        switch (sort) {
        case 'created_asc': r.sort((a, b) => +new Date(a.created_at) - +new Date(b.created_at)); break;
        case 'created_desc': r.sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at)); break;
        case 'updated_asc': r.sort((a, b) => +new Date(a.updated_at) - +new Date(b.updated_at)); break;
        case 'updated_desc': r.sort((a, b) => +new Date(b.updated_at) - +new Date(a.updated_at)); break;
        case 'az': r.sort((a, b) => a.name.localeCompare(b.name)); break;
        case 'za': r.sort((a, b) => b.name.localeCompare(a.name)); break;
        }
        return r;
    }, [repos, search, sort, tagFilter]);

    return (
        <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
            <div className="relative w-full md:w-1/2">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-8"
            />
            </div>
            <select
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
            className="bg-zinc-800 text-white border border-zinc-700 rounded px-3 py-2"
            >
            <option value="created_desc">Created (Newest)</option>
            <option value="created_asc">Created (Oldest)</option>
            <option value="updated_desc">Updated (Newest)</option>
            <option value="updated_asc">Updated (Oldest)</option>
            <option value="az">Alphabetical (A-Z)</option>
            <option value="za">Alphabetical (Z-A)</option>
            </select>
        </div>

        <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
            <Badge
                key={tag}
                onClick={() => setTagFilter(tag)}
                className={`cursor-pointer ${tagFilter === tag ? 'bg-red-600 text-white' : 'bg-zinc-700'}`}
            >
                {tag}
            </Badge>
            ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredRepos.map(repo => (
            <Card key={repo.id} className="bg-zinc-900 text-white border-zinc-700">
                <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-blue-400 break-words whitespace-normal line-clamp-2">
                    {repo.name}
                    </h3>
                    <Badge className={`text-white text-xs ${repo.isManual ? 'bg-green-600' : 'bg-purple-600'}`}>
                    {repo.isManual ? 'CONTRIBUTED' : 'GITHUB'}
                    </Badge>
                </div>
                <p className="text-sm text-zinc-300">{repo.description || 'No description provided.'}</p>
                <p className="text-xs text-zinc-400">Created On: {new Date(repo.created_at).toDateString()}</p>
                <p className="text-xs text-zinc-400">Last Updated: {new Date(repo.updated_at).toDateString()}</p>
                <div className="flex flex-wrap gap-1">
                    {repo.topics?.map((topic, i) => (
                    <Badge key={i} className="bg-zinc-700 text-xs">{topic}</Badge>
                    ))}
                </div>
                <Button asChild variant="destructive" className="w-full">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                    </a>
                </Button>
                </CardContent>
            </Card>
            ))}
        </div>
        </div>
    );
};

export default GithubProjects;
