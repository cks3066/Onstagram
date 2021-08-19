import React from "react";

import { Button, Grid, Image, Input, Text } from "../elements";

const CommentWrite = (props) => {

    return (
      <React.Fragment>
        <Grid padding="16px">
          <Input placeholder="댓글 내용을 입력해주세요."/>
          <Button>작성</Button>
        </Grid>
      </React.Fragment>
    );
}

export default CommentWrite;