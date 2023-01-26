import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  background-color: #080420;

  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;

    &::-webkit-scrollbar {
      width: 0.2rem;

      &-thumb {
        background-color: #ffffff39;
        border-radius: 1rem;
        width: 0.1rem;
      }
    }

    .contact {
      background-color: #ffffff39;
      min-height: 5rem;
      width: 90%;
      cursor: pointer;
      border-radius: 0.2rem;
      padding: 0.4rem;
      gap: 1rem;
      align-items: center;
      display: flex;
      transition: all 0.5s ease-in-out;

      .avatar {
        img {
          height: 3rem;
        }
      }

      .username {
        h3 {
          color: #fff;
        }
      }
    }

    .selected {
      background-color: #9186f3;
    }
  }

  .current-user {
    background-color: #0d0d30;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }

    .username {
      h2 {
        color: #fff;
      }
    }
  }

  @media (min-width: 720px) and (max-width: 1080px) {
    gap: 0.5rem;

    .username {
      h2 {
        font-size: 1rem;
      }
    }
  }
`;
