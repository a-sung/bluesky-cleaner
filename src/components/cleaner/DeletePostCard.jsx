import {useState} from "react";
import Card from "./Card";

function DeleteAllCard({agent, user}) {
    const [excludeReposts, setExcludeReposts] = useState(false);
    const [excludeReplies, setExcludeReplies] = useState(false);
    const [excludeLiked, setExcludeLiked] = useState(false);
    const [excludeReposted, setExcludeReposted] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [repostCount, setRepostCount] = useState(0);

    const handleClickDelete = async () => {
        if (!user) {
            window.alert("Can use after login.");
            return;
        };
        const {data} = await agent.getAuthorFeed({
            actor: user.did
        })

        const feeds = data.feed;
        let filteredFeed = feeds;

        // 재게시 제외
        if (excludeReposts) {
            filteredFeed = filteredFeed.filter((feed) => {
                return !feed.reason;
            });
        }

        // 답글 제외
        if (excludeReplies) {
            filteredFeed = filteredFeed.filter((feed) => {
                return !feed.reply;
            });
        }

        // 좋아요 표시된 글 제외
        if (excludeLiked) {
            filteredFeed = filteredFeed.filter((feed) => {
                return feed.post.likeCount < likeCount;
            });
        }

        // 재게시된 글 제외
        if (excludeLiked) {
            filteredFeed = filteredFeed.filter((feed) => {
                return feed.post.repostCount < repostCount;
            });
        }

        filteredFeed.map(async(feed) => {
            const post = feed.post;
            !feed.reason 
                ? await agent.deletePost(post.uri) 
                : await agent.deleteRepost(post.viewer.repost)
        })

        window.alert("Done!");
    }
    return (
        <Card 
            header="Delete All Posts" 
            message="Customize your deletion preferences" 
            action={handleClickDelete}
        >
            <div>
                <input 
                    type="checkbox" 
                    value={excludeReposts} 
                    onChange={() => setExcludeReposts(!excludeReposts)}
                />
                <label>Exclude reposts</label>
            </div>
            <div>
                <input
                    type="checkbox" 
                    value={excludeReplies} 
                    onChange={() => setExcludeReplies(!excludeReplies)}
                />
                <label>Exclude replies</label>
            </div>
            <div>
                <input 
                    type="checkbox" 
                    value={excludeLiked} 
                    onChange={() => setExcludeLiked(!excludeLiked)} 
                />
                <span>Exclude posts with more than </span>
                <input 
                    type="number" 
                    value={likeCount} 
                    onChange={(e) => setLikeCount(e.target.value)} 
                />
                <span> likes</span>
            </div>
            <div>
                <input 
                    type="checkbox" 
                    value={excludeReposted} 
                    onChange={() => setExcludeReposted(!excludeLiked)} 
                />
                <span>Exclude posts with more than </span>
                <input 
                    type="number" 
                    value={repostCount} 
                    onChange={(e) => setRepostCount(e.target.value)} 
                />
                <span> reposts</span>
            </div>
        </Card>
    )
}

export default DeleteAllCard;