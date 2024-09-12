const Topic = require('./models/topic');
const Problem = require('./models/problem');
const sequelize = require('./config/database');

const data = [
    {
        "topic": "Arrays",
        "problems": [
            {
                "name": "Two Sum",
                "youtube": "https://youtu.be/KLlXCFG5TnA",
                "leetcode": "https://leetcode.com/problems/two-sum/",
                "article": "https://www.geeksforgeeks.org/two-sum-problem/",
                "difficulty": "Easy"
            },
            {
                "name": "Maximum Subarray (Kadane's Algorithm)",
                "youtube": "https://youtu.be/86CQq3pKSUw",
                "leetcode": "https://leetcode.com/problems/maximum-subarray/",
                "article": "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/",
                "difficulty": "Medium"
            },
            {
                "name": "Merge Intervals",
                "youtube": "https://youtu.be/qKczfGUrFY4",
                "leetcode": "https://leetcode.com/problems/merge-intervals/",
                "article": "https://www.interviewbit.com/tutorial/merge-intervals/",
                "difficulty": "Medium"
            },
            {
                "name": "Trapping Rain Water",
                "youtube": "https://youtu.be/HmBbcDiJapY",
                "leetcode": "https://leetcode.com/problems/trapping-rain-water/",
                "article": "https://www.geeksforgeeks.org/trapping-rain-water/",
                "difficulty": "Hard"
            }
        ]
    },
    {
        "topic": "Linked List",
        "problems": [
            {
                "name": "Reverse a Linked List",
                "youtube": "https://youtu.be/iRtLEoL-r-g",
                "leetcode": "https://leetcode.com/problems/reverse-linked-list/",
                "article": "https://www.geeksforgeeks.org/reverse-a-linked-list/",
                "difficulty": "Easy"
            },
            {
                "name": "Merge Two Sorted Lists",
                "youtube": "https://youtu.be/XIdigk956u0",
                "leetcode": "https://leetcode.com/problems/merge-two-sorted-lists/",
                "article": "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
                "difficulty": "Medium"
            },
            {
                "name": "Reverse Nodes in k-Group",
                "youtube": "https://youtu.be/MdE_nDsLz54",
                "leetcode": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
                "article": "https://www.geeksforgeeks.org/reverse-a-list-in-groups-of-given-size/",
                "difficulty": "Hard"
            }
        ]
    },
    {
        "topic": "Stacks",
        "problems": [
            {
                "name": "Valid Parentheses",
                "youtube": "https://youtu.be/WTzjTskDFMg",
                "leetcode": "https://leetcode.com/problems/valid-parentheses/",
                "article": "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/",
                "difficulty": "Easy"
            },
            {
                "name": "Next Greater Element",
                "youtube": "https://youtu.be/Du881K7Jtk8",
                "leetcode": "https://leetcode.com/problems/next-greater-element-i/",
                "article": "https://www.geeksforgeeks.org/next-greater-element/",
                "difficulty": "Medium"
            },
            {
                "name": "Largest Rectangle in Histogram",
                "youtube": "https://youtu.be/ZmnqCZp9bBs",
                "leetcode": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
                "article": "https://www.geeksforgeeks.org/largest-rectangle-under-histogram/",
                "difficulty": "Hard"
            }
        ]
    },
    {
        "topic": "Queues",
        "problems": [
            {
                "name": "Implement Queue using Stacks",
                "youtube": "https://youtu.be/jDZQKzEtbYQ",
                "leetcode": "https://leetcode.com/problems/implement-queue-using-stacks/",
                "article": "https://www.geeksforgeeks.org/queue-using-stacks/",
                "difficulty": "Easy"
            }
        ]
    },
    {
        "topic": "Trees",
        "problems": [
            {
                "name": "Inorder Traversal",
                "youtube": "https://youtu.be/gv8vXEPNNLw",
                "leetcode": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
                "article": "https://www.geeksforgeeks.org/inorder-tree-traversal/",
                "difficulty": "Easy"
            },
            {
                "name": "Lowest Common Ancestor",
                "youtube": "https://youtu.be/13m9ZCB8gjw",
                "leetcode": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
                "article": "https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/",
                "difficulty": "Medium"
            },
            {
                "name": "Serialize and Deserialize Binary Tree",
                "youtube": "https://youtu.be/nm0I89V5zFY",
                "leetcode": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
                "article": "https://www.geeksforgeeks.org/serialize-deserialize-binary-tree/",
                "difficulty": "Hard"
            }
        ]
    },
    {
        "topic": "Graphs",
        "problems": [
            {
                "name": "BFS (Breadth First Search)",
                "youtube": "https://youtu.be/U1q16AFcjKs",
                "leetcode": "https://leetcode.com/problems/rotting-oranges/",
                "article": "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/",
                "difficulty": "Medium"
            },
            {
                "name": "Dijkstra's Shortest Path",
                "youtube": "https://youtu.be/pVfj6mxhdMw",
                "leetcode": "https://leetcode.com/problems/network-delay-time/",
                "article": "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-using-priority_queue-stl/",
                "difficulty": "Tough"
            }
        ]
    },
    {
        "topic": "Dynamic Programming",
        "problems": [
            {
                "name": "Fibonacci Sequence",
                "youtube": "https://youtu.be/tyB0ztf0DNY",
                "leetcode": "https://leetcode.com/problems/fibonacci-number/",
                "article": "https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/",
                "difficulty": "Easy"
            },
            {
                "name": "Longest Increasing Subsequence",
                "youtube": "https://youtu.be/CE2b_-XfVDk",
                "leetcode": "https://leetcode.com/problems/longest-increasing-subsequence/",
                "article": "https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/",
                "difficulty": "Medium"
            },
            {
                "name": "Edit Distance",
                "youtube": "https://youtu.be/MiqoA-yF-0M",
                "leetcode": "https://leetcode.com/problems/edit-distance/",
                "article": "https://www.geeksforgeeks.org/edit-distance-dp-5/",
                "difficulty": "Hard"
            }
        ]
    }
]

const insertData = async () => {
    try {
        await sequelize.sync(); // Ensure tables exist

        for (const topicData of data) {
            // Check if the topic already exists
            let topic = await Topic.findOne({ where: { topic: topicData.topic } });

            // If the topic doesn't exist, create it
            if (!topic) {
                topic = await Topic.create({ topic: topicData.topic });
            }

            // Loop through the problems and insert them
            for (const problemData of topicData.problems) {
                await Problem.create({
                    name: problemData.name,
                    youtube: problemData.youtube,
                    leetcode: problemData.leetcode,
                    article: problemData.article,
                    difficulty: problemData.difficulty,
                    topicId: topic.id
                });
            }
        }

        console.log('Data inserted successfully');
    } catch (error) {
        console.error('Error inserting data:', error);
    }
};

insertData();
