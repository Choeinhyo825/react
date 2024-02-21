import React from 'react';
import { Container, Typography, Grid, Paper, TextField, Button } from '@mui/material';

const Board = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        게시판
      </Typography>

      {/* 게시물 목록 */}
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          게시물 제목
        </Typography>
        <Typography variant="body1" gutterBottom>
          게시물 내용...
        </Typography>

        {/* 댓글 목록 */}
        <div style={{ marginLeft: '20px', marginTop: '10px', color: '#888' }}>
          <Typography variant="body2" gutterBottom>
            댓글 1
          </Typography>
          <Typography variant="body2" gutterBottom>
            댓글 2
          </Typography>
          <Typography variant="body2" gutterBottom>
            댓글 3
          </Typography>
        </div>

        {/* 댓글 작성 폼 */}
        <div style={{ marginTop: '10px' }}>
          <TextField
            variant="outlined"
            label="댓글을 입력하세요"
            multiline
            fullWidth
            rows={4}
            margin="dense"
          />
          <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
            댓글 작성
          </Button>
        </div>
      </Paper>

      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          게시물 제목
        </Typography>
        <Typography variant="body1" gutterBottom>
          게시물 내용...
        </Typography>

        <div style={{ marginLeft: '20px', marginTop: '10px', color: '#888' }}>
          <Typography variant="body2" gutterBottom>
            댓글 1
          </Typography>
          <Typography variant="body2" gutterBottom>
            댓글 2
          </Typography>
        </div>

        <div style={{ marginTop: '10px' }}>
          <TextField
            variant="outlined"
            label="댓글을 입력하세요"
            multiline
            fullWidth
            rows={4}
            margin="dense"
          />
          <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
            댓글 작성
          </Button>
        </div>
      </Paper>

      {/* 게시물 작성 폼 */}
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          게시물 작성
        </Typography>
        <form>
          <TextField variant="outlined" label="제목" fullWidth margin="dense" />
          <TextField
            variant="outlined"
            label="내용"
            multiline
            fullWidth
            rows={6}
            margin="dense"
          />
          <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
            작성
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Board;